 Vue.createApp({
  data(){
    return {
      word: '',
      words: [],
      message: null,
    }
  }, 
  computed: { //Computed property
    wordCount() {
      return this.words.length;
    }
  },
  methods: {
    saveWord(word){
      this.words.push(word)
    },
    showWord(){
      if(this.words.length > 0){
        this.message = this.words.toString()
      }
    },
    clearWord(){
      this.words = []
      this.message = '';
    },
    

  }
}).mount('#app') 