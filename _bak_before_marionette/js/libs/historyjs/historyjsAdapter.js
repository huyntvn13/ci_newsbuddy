var pushSupport, rootUrl;

pushSupport = (window.history != null) && (window.history.pushState != null);

if (pushSupport && (typeof Backbone !== "undefined" && Backbone !== null) && (Backbone.History != null)) {
  rootUrl = document.location.protocol + '//' + (document.location.host || document.location.hostname);
  _.extend(Backbone.History.prototype, {
    getFragment: function() {
      return window.location.pathname.substring(1);
    },
    ajaxifyInternalLinks: function() {
      var self;
      self = this;
      return $('a[href^=/]').live('click', function(event) {
        var href;
        href = $(this).attr('href');
        self.saveLocation(href);
        self.loadUrl(href.substring(1));
        event.preventDefault();
        return false;
      });
    },
    start: function() {
      var self;
      _.bindAll(this, 'loadUrl');
      this.ajaxifyInternalLinks();
      this.loadUrl();
      self = this;
      return window.onpopstate = function(event) {
        if (event.state != null) {
          return self.loadUrl();
        }
      };
    },
    loadUrl: function(fragment) {
      fragment = this.fragment = fragment != null ? fragment : this.getFragment();
      return _.each(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          return handler.callback(fragment);
        }
      });
    },
    saveLocation: function(fragment, replace) {
      var loc, state, url;
      if (!(fragment != null)) {
        return;
      }
      if (this.fragment === fragment) {
        return;
      }
      this.fragment = fragment;
      loc = window.location;
      url = loc.protocol + "//" + loc.host + fragment;
      state = {
        ts: new Date()
      };
      if (replace != null) {
        return window.history.replaceState(state, document.title, url);
      } else {
        return window.history.pushState(state, document.title, url);
      }
    }
  });
}
