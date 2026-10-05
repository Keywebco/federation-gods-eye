/* Roger Sim client for God's Eye (consumer-v2).
   Talks to the Federation's public Roger Sim backend (Keywebco/roger-sim-api on Render).
   Chat goes through the server's /proxy/chat route: the server adds its own credentials,
   so NO API key ever appears in this page. The server only accepts browser calls from
   https://keywebco.github.io (CORS), so the chat works on the live Pages site, not from a raw file. */
(function () {
  'use strict';
  var BASE = 'https://roger-sim-api.onrender.com';

  function timedFetch(url, options, ms) {
    var controller = new AbortController();
    var timer = setTimeout(function () { controller.abort(); }, ms);
    options = options || {};
    options.signal = controller.signal;
    return fetch(url, options).then(function (r) { clearTimeout(timer); return r; },
      function (e) { clearTimeout(timer); throw e; });
  }

  window.RogerSim = {
    base: BASE,
    /* GET /health -> {status:'online'|'unavailable', corpus_loaded:bool}. The free server
       can take up to a minute to wake, so allow 70 seconds. */
    health: function () {
      return timedFetch(BASE + '/health', {}, 70000).then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      }).then(function (d) {
        return { online: d && d.status === 'online' && d.corpus_loaded === true };
      });
    },
    /* POST /proxy/chat {model, messages, stream:false} -> OpenAI-style {choices:[{message:{content}}]} */
    ask: function (messages) {
      return timedFetch(BASE + '/proxy/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'deepseek-chat', messages: messages, stream: false })
      }, 100000).then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (d) {
          if (!r.ok) { var e = new Error('HTTP ' + r.status); e.status = r.status; throw e; }
          var c = d && d.choices && d.choices[0] && d.choices[0].message && d.choices[0].message.content;
          if (!c) throw new Error('empty reply');
          return String(c);
        });
      });
    },
    friendly: function (err) {
      if (err && err.status === 429) return 'Roger Sim is answering a lot of people right now. Please wait one minute, then ask again.';
      return 'Roger Sim could not answer just now. The free server sleeps when nobody is talking and can take up to a minute to wake up. Please try again in a moment. You can also email keywebco@gmail.com.';
    },
    offlineText: 'Roger Sim is resting right now. Ask anyway: your question will wake the server, which can take up to a minute. If it still does not answer, email keywebco@gmail.com.'
  };
})();
