var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    console.log('initializing');
    this.listenTo(this.collection, 'select', this.selectVideo);
  },
  
  selectVideo: function(selection) {
    console.log('select video');
    this.model = selection;
    this.render();
  },
  
  render: function() {
    if (this.model){
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
