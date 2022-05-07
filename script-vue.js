Vue.createApp({
    data() {
      return {
        conv_type: 'to_c',
        temp_data: 0
      }
    },
    computed: {
      converted_temp() {
        if(this.conv_type == "to_c"){
          return Math.round((this.temp_data * 9/5) + 32, 2);
        }else{
          return Math.round((this.temp_data - 32) * 5/9, 2);
        }
      }
    },
    methods: {
      getTempButtonClass(pos) {
        if(this.conv_type == 'to_c' && pos == 'l'){
          return 'border rounded-'+pos+'-full px-3 py-1 transition duration-500 ease-in-out border bg-blue-100 border-blue-400 shadow shadow-blue-700 font-bold'
        }
        if(this.conv_type == 'to_f' && pos == 'r'){
          return 'border rounded-'+pos+'-full px-3 py-1 transition duration-500 ease-in-out border bg-blue-100 border-blue-400 shadow shadow-blue-700 font-bold'
        }
        return 'border rounded-'+pos+'-full px-3 py-1 transition duration-500 ease-in-out ';

      },
      getUnitText(){
        return (this.conv_type == 'to_c')?'&#8451;':'&#8457;';
      }
    }
  }).mount('#app')