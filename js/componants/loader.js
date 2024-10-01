var loadArray = [
    "inject/imgs/genne_logo.svg",
    "inject/imgs/upload.svg",
    "inject/imgs/add.svg",
    "inject/imgs/reseve_test.jpeg",
    "inject/imgs/delete.svg",
    "inject/imgs/list.svg",
    "inject/imgs/edite.svg",
    "inject/imgs/date_piker.svg",
    "inject/imgs/repeat.svg",
    "inject/imgs/export.svg",
    "inject/imgs/import.svg",
    "inject/js/info_line.js",
    "inject/css/info_line.css",
    "inject/js/info-line-list.js",
    "inject/css/info-line-list.css",
    "inject/css/select_line.css",
    "inject/js/select_line.js", 
    "inject/css/date-line.css",
    "inject/js/date-line.js",  
    "inject/css/text-line.css",
    "inject/js/text-line.js", 
    "inject/css/pdf-line.css",
    "inject/js/pdf-line.js",
    "inject/css/img-line.css",
    "inject/js/img-line.js",   

    "inject/js/genne_manager_cheker.js",
    "inject/js/genne_manager_input_validator.js",
    "inject/css/forms/genne-form-part-head.css",
    "inject/js/forms/genne-form-part-head.js", 
    "inject/css/forms/genne-form-part.css",
    "inject/css/forms/genne-form-part-one-part-viow.css",
    "inject/js/forms/genne-form-part.js", 
    "inject/css/forms/genne-form-meta-data.css",
    "inject/js/forms/genne-form-meta-data.js",
    "inject/css/forms/genne-multi-part-form.css",
    "inject/js/forms/genne-multi-part-form.js",    
    "inject/css/forms/genne-multi-part-form-one-part-viow.css",
    "inject/js/genne-script-runner.js",        
    "inject/css/genne-script-maker.css",
    "inject/js/genne-script-maker.js", 
    "inject/js/genne-script-holder-part.js",   
    "inject/css/genne-script-holder-part.css",       
    "inject/js/genne-script-holder.js",   
    "inject/css/genne-script-holder.css",    
    "inject/css/genne-script-shower.css",
    "inject/js/genne-script-shower.js",  
    "inject/css/genne-script-editor.css",
    "inject/js/genne-script-editor.js",
    

    "inject/css/genne-script-holder-short-hand.css",
    "inject/js/genne-script-holder-short-hand.js", 
    
    "inject/css/genne-script-list-short-way.css",
    "inject/js/genne-script-list-short-way.js", 
        
    "inject/js/genne-add-script.js",
    "inject/js/genne-list-scripts.js",
    "inject/js/genne-export-scripts.js",
    "inject/js/genne-import-scripts.js",
    "inject/css/globel.css",   
    "inject/js/top.js",
    "inject/js/bottom.js",    
    "inject/js/left.js",    
    "inject/js/right.js",    
    "inject/js/c-icon.js",
    "inject/js/pop_up.js",
    "inject/js/forms/parts/genne-application-form.js",     
    "inject/js/forms/parts/genne-login-form.js",
    "inject/js/forms/parts/genne-persons-asking-for-an-appointment-form.js",
    "inject/json/config.json",
    "inject/json/visas.json",
    "inject/json/sites.json",
    "inject/json/nationalities.json",
    "inject/json/countries.json",
    "inject/json/options/Forms.json",
    "inject/json/options/Locations.json",
    "inject/json/options/Service_Level.json",
    "inject/json/options/Visa_Type.json",
    "inject/json/options/Centers.json",
    "inject/json/options/Appointment_For.json",
    "inject/json/options/Visa_Sub_Type_Case_National_Visa.json",
    "inject/json/options/Visa_Sub_Type_Case_Schengen_visa.json",
    "inject/json/options/Appointment_Category.json",
    "inject/json/options/Number_Of_Members.json",
    "inject/json/options/Yes_No.json",
    "inject/json/options/Purpose_Of_Journey.json",
    "inject/json/options/countries.json",
    "inject/json/options/Gender.json",
    "inject/json/options/Nationalities.json",
    "inject/json/options/Marital_Status.json",
    "inject/json/options/Occupation.json",
    "inject/json/options/Number_Of_Entries_Requested.json",
    "inject/json/options/Fingerprints.json",
    "inject/json/options/Details_of_the_inviting_person.json",
    "inject/json/options/Cost_Covered_By.json",
    "inject/json/options/Means_Of_Support.json",
    "inject/json/options/Relationship.json",
    "inject/json/options/Passport_Type.json",

    "inject/json/actions/Genne_Application_Form.json",
    "inject/json/actions/genne_login_form.json",
    "inject/json/actions/genne-persons-asking-for-an-appointment-form.json",
    
    "inject/css/genne-main-menu.css",
    "inject/js/genne-main-menu.js",
    "inject/css/genne-main-panal.css",
    "inject/js/genne-main-panal.js",  
    "inject/js/genne-script-autorunner.js", 
];
window.genne_files_srs={

}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = chrome.runtime.getURL(src);
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

async function load_files() {
    try {
        for (var filePath of loadArray) {
            if (filePath.endsWith(".js")) {
                try{
                    await loadScript(filePath);
                }catch(err){
                    console.log(err)
                }
            } else if (filePath.endsWith(".css")) {
                const link = document.createElement("link");
                link.href = chrome.runtime.getURL(filePath);
                link.rel = "stylesheet";
                document.head.appendChild(link);
            } else if (filePath.endsWith(".svg")||filePath.endsWith(".json")||filePath.endsWith(".jpeg")) {
                const div = document.createElement("div");
                var src = chrome.runtime.getURL(filePath);
                div.style.display ='none';
                div.setAttribute('plane_path',filePath);
                div.setAttribute('actiual_path',src);
                document.body.appendChild(div);
            }    
        }
    } catch (error) {
        console.error("Error loading scripts", error);
    }
}

load_files()