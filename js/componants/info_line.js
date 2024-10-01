class Info_line extends HTMLElement {
    constructor() {
        super();
        this.key=this.getAttribute('key');
        this.value=this.getAttribute('value');
        this.language_name='English';
        this.firest_connect_state=false;     
    }

    firest_connect(){
        if(!this.firest_connect_state){
            this.render()
            this.firest_connect_state=true
        }
    }



    render(){
        this.innerHTML=`
            <left-div translate_member>${this.key} : </left-div>
            <right-div translate_member title='${this.value}'>${this.value}</right-div>
        `
    }

    after_translate_ruteen(){
        if(LM.rtl_laguage.includes(this.language_name)){
            console.log(true)
        }
        return
    }   
    set_value(){
        this.children[1].textContent=this.value;
        this.children[1].title=this.value;
    }

    connectedCallback(){ 
        this.firest_connect()
    }

    run_on_Attribute_change(attribute_name){
        if(this.firest_connect_state){
            if(attribute_name=='value'){
                this.set_value()
            }
        } 
    }

    attributeChangedCallback(name, oldValue, newValue){
        this[name]=newValue;
        this.run_on_Attribute_change(name)
    } 
    static get observedAttributes() { return ['value']; }
           
}
customElements.define('info-line', Info_line);