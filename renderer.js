// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var heading = document.querySelectorAll('h1');

if (heading[0] != null) {
    if (heading[0].innerText == "Update Personal Information") {

        var obj = { "ParamDoc": { "Context": { "@Type": "Event", "@Id": "1", "Parameters": { "Parameter": { "@Name": "SevisId", "#text": "N0000127395" } } } }, "IsSevisIdMatched": false, "IsSecondaryMatched": false, "ContextName": "PersonalInfoUpdate" }




        var populate = document.createElement("BUTTON");
        populate.id = 'populate';
        populate.innerHTML = "Populate from ISSM";
        document.body.insertBefore(populate, document.body.firstChild);



        populate.style.left = "50%";
        populate.style.transform = "translateX(-50%)";
        populate.style.margin = "75px";



        populate.addEventListener("click", function () {
            (async () => {


                const strthings = document.getElementsByTagName('strong')

                const sevisid = strthings[3].childNodes[0].textContent;

                obj.ParamDoc.Context.Parameters.Parameter["#text"] = sevisid;

                const rawResponse = await fetch('http://localhost/WebAPI/api/rtiaccess/GetStudentData', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj)
                });
                const content = await rawResponse.json();
                console.log(content);
                var pksysid = content.ParamDoc.Context.Fields.Field[0]["#text"];
                sessionStorage.setItem("pksysidses", pksysid);

                const lastname = document.getElementById('lastName');
                lastname.value = content.ParamDoc.Context.Fields.Field[6]["#text"];


                const firstname = document.getElementById('firstName');
                firstname.value = content.ParamDoc.Context.Fields.Field[7]["#text"];

                let bmonth = content.ParamDoc.Context.Fields.Field[12]["#text"];
                let bday = content.ParamDoc.Context.Fields.Field[11]["#text"];
                let byear = content.ParamDoc.Context.Fields.Field[13]["#text"];

                let dob = bmonth.concat("/", bday, "/", byear);

                document.getElementById('biographicInfoFormdateOfBirth1').value = bmonth;
                document.getElementById('biographicInfoFormdateOfBirth2').value = bday;
                document.getElementById('biographicInfoFormdateOfBirth3').value = byear;

                document.getElementById('biographicInfoFormdateOfBirth').value = dob;




                if (content.ParamDoc.Context.Fields.Field[15]["#text"] == "M") {
                    document.getElementById('biographicInfoForm.genderM').checked = true;

                }
                else if (content.ParamDoc.Context.Fields.Field[15]["#text"] == "F") {
                    document.getElementById('biographicInfoForm.genderF').checked = true;
                }
                else if (content.ParamDoc.Context.Fields.Field[15]["#text"] == "U") {
                    document.getElementById('biographicInfoForm.genderU').checked = true;
                }






                var ddlArray = new Array();
                var ddlNames = new Array();
                var ddl = document.getElementById('countryOfBirth');

                for (i = 0; i < ddl.options.length; i++) {
                    ddlArray[i] = ddl.options[i].value;
                    ddlNames[i] = ddl.options[i].innerHTML;
                }
                var COB = content.ParamDoc.Context.Fields.Field[22]["#text"];
                for (i = 0; i < ddl.options.length; i++) {
                    if (COB.toUpperCase() == ddlArray[i].toUpperCase()) {
                        document.getElementById('countryOfBirth').value = ddlArray[i];
                        document.getElementById('countryOfBirth_chosen').getElementsByTagName('a')[0].innerHTML = ddlNames[i];
                        break;
                    }

                }



                var ddlArrayCOC = new Array();
                var ddlNamesCOC = new Array();
                var ddlCOC = document.getElementById('biographicInfoForm.countryOfCitizenship');

                for (i = 0; i < ddlCOC.options.length; i++) {
                    ddlArrayCOC[i] = ddlCOC.options[i].value;
                    ddlNamesCOC[i] = ddlCOC.options[i].innerHTML;
                }
                var COC = content.ParamDoc.Context.Fields.Field[23]["#text"];
                for (i = 0; i < ddlCOC.options.length; i++) {
                    if (COC.toUpperCase() == ddlArrayCOC[i].toUpperCase()) {
                        document.getElementById('biographicInfoForm.countryOfCitizenship').value = ddlArrayCOC[i];
                        document.getElementById('biographicInfoForm_countryOfCitizenship_chosen').getElementsByTagName('a')[0].innerHTML = ddlNamesCOC[i];
                        break;
                    }

                }


                var addr1div = document.getElementById('USAddress_com_addr1_div');
                var addr2div = document.getElementById('USAddress_com_addr2_div');
                var addrcitydiv = document.getElementById('USAddress_com_city_div');
                var addrpostaldiv = document.getElementById('USAddress_com_postal_code_div');
                var addrstatediv = document.getElementById('USAddress_com_state_code_div');



                var addr1 = document.getElementById('com_addr1');

                var addrcity = document.getElementById('com_city');
                var addrstate = document.getElementById('com_state_code');
                var addrpostal = document.getElementById('com_postal_code');

                addr1div.innerText = content.ParamDoc.Context.Fields.Field[33]["#text"];

                addrcitydiv.innerText = content.ParamDoc.Context.Fields.Field[37]["#text"];
                addrstatediv.innerText = content.ParamDoc.Context.Fields.Field[39]["#text"];
                addrpostaldiv.innerText = content.ParamDoc.Context.Fields.Field[42]["#text"];

                addr1.value = content.ParamDoc.Context.Fields.Field[33]["#text"];

                addrcity.value = content.ParamDoc.Context.Fields.Field[37]["#text"];
                addrstate.value = content.ParamDoc.Context.Fields.Field[39]["#text"];
                addrpostal.value = content.ParamDoc.Context.Fields.Field[42]["#text"];




                var emailaddress = document.getElementById('emailAddr');
                emailaddress.value = content.ParamDoc.Context.Fields.Field[30]["#text"];

                var countrycode = document.getElementById('biographicInfoForm.foreignCountryNumber');
                countrycode.value = content.ParamDoc.Context.Fields.Field[26]["#text"];

                var foreignphone = document.getElementById('biographicInfoForm.foreignPhone');
                foreignphone.value = content.ParamDoc.Context.Fields.Field[28]["#text"];





            })();




        });
    }
}

















var testheading = document.querySelectorAll('h1');

if (testheading[0] != null) {
    if (testheading[0].innerText == "Student Information") {

        var obj = {
            "ParamDoc": {
                "Parameters": {
                    "Parameter": [
                        {
                            "@Name": "SEVISID",
                            "#text": "N0000127393"
                        },
                        {
                            "@Name": "LNAME",
                            "#text": "a a a Alpha"
                        },
                        {
                            "@Name": "FNAME",
                            "#text": "Sathis"
                        },
                        {
                            "@Name": "DOB",
                            "#text": "12/12/2000"
                        },
                        {
                            "@Name": "COB",
                            "#text": "INDIA"
                        },
                        {
                            "@Name": "COC",
                            "#text": "INDIA"
                        },
                        {
                            "@Name": "GENDER",
                            "#text": "MALE"
                        }
                    ]
                }
            },
            "IsSevisIdMatched": false,
            "IsSecondaryMatched": false,
            "ContextName": null
        };



        (async () => {


            const strthings = document.getElementsByTagName('strong')

            const sevisid = strthings[6].childNodes[0].textContent;

            var sevisidsession = sevisid;

            sessionStorage.setItem("sidsession", sevisidsession);

            obj["ParamDoc"]["Parameters"]["Parameter"][0]["#text"] = sevisid;

            const rawResponse = await fetch('http://localhost/WebAPI/api/rtiaccess/GetStudentDetails', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            });
            const content = await rawResponse.json();

            if (content.IsSevisIdMatched == true) {

                var match = document.createElement("DIV");
                match.id = 'match';
                match.innerHTML = "Partial Match";
                match.style.backgroundColor = 'green';
                document.body.insertBefore(match, document.body.firstChild);



            }
            else {
                var match = document.createElement("DIV");
                match.id = 'match';
                match.innerHTML = "No Match";
                match.style.backgroundColor = 'red';
                document.body.insertBefore(match, document.body.firstChild);

            }

        })();





    }
}
































var heading = document.querySelectorAll('h1');

if (heading[0] != null) {
    if (heading[0].innerText == "Update Personal Information") {


        const updatebtn = document.querySelector('input[value="Update Information"]');

        updatebtn.addEventListener("click", function () {

            const lastname = document.getElementById('lastName');
            var lastnamevar = lastname.value;
            sessionStorage.setItem("lastnamesession", lastnamevar);

            const firstname = document.getElementById('firstName');
            var firstnamevar = firstname.value;
            sessionStorage.setItem("firstnamesession", firstnamevar);



        });

    }

}










var font = document.querySelectorAll('font');





if (font[0].innerText == "Update Successful") {




    var printi20 = document.querySelector('input[value="Print I-20"]');



    printi20.addEventListener("click", function () {

        (async () => {
            var hiddentoken = document.querySelector('input[name="org.apache.struts.taglib.html.TOKEN"]').value;
            var printtype = document.querySelector('input[name="print_type"]').value;

            const rawResponse = await fetch('https://egov.ice.gov/sbtsevis/action/eligibility/PrintI20Action?org.apache.struts.taglib.html.TOKEN={hiddentoken}&print_type={printtype}', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            var bytedata = await rawResponse.blob();
            var int8arr = new Uint8Array(bytedata);
            (async () => {
                var sidfile = sessionStorage.getItem("sidsession");
                var pkidfile = sessionStorage.getItem("pksysidses");
                var formData = new FormData();
                var doc = { "Context": { "Fields": { "Field": [{ "@Type": "", "@fsaSourceName": "SysId", "@ExtName": "", "@DBName": "pk_SysId", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "", "@CodeTableName": "", "#text": "8029" }, { "@Type": "", "@fsaSourceName": "UserId", "@ExtName": "ModUserId", "@DBName": "ModUserId", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "ModUserId", "@CodeTableName": "", "#text": "9999" }, { "@Type": "", "@fsaSourceName": "RecordEvent", "@ExtName": "", "@DBName": "RecordEvent", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "", "@CodeTableName": "", "#text": "PersonalInfoUpdate" }, { "@Type": "", "@fsaSourceName": "SEVISId", "@ExtName": "", "@DBName": "SEVISId", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "", "@CodeTableName": "", "#text": "N0000127394" }, { "@Type": "", "@fsaSourceName": "SeventCommonId", "@ExtName": "", "@DBName": "fk_SeventCommonId", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "", "@CodeTableName": "" }, { "@Type": "", "@fsaSourceName": "FileData", "@ExtName": "", "@DBName": "FileData", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "", "@CodeTableName": "", "#text": bytedata.size }] } } };
                doc.Context.Fields.Field[0]["#text"] = pkidfile;
                doc.Context.Fields.Field[3]["#text"] = sidfile;
                formData.append("FileByteStream", bytedata);
                formData.append("DataDoc", JSON.stringify(doc));
                formData.append("ContextName", "PersonalInfo");
                const rawResponse = await fetch('http://localhost/WebAPI/api/rtiaccess/UploadFile', {
                    method: 'POST',
                    body: formData, enctype: "multipart/form-data"
                });
                const content = await rawResponse.json();
                console.log(content);
            })();
        })();


    });

























































    var upname = sessionStorage.getItem("lastnamesession");
    var lastupname = sessionStorage.getItem("firstnamesession");



    var obj = { "ParamDoc": { "Context": { "Fields": { "Field": [{ "@Type": "", "@fsaSourceName": "SysId", "@ExtName": "", "@DBName": "pk_SysId", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "", "@CodeTableName": "", "#text": "3808" }, { "@Type": "", "@fsaSourceName": "UserId", "@ExtName": "ModUserId", "@DBName": "ModUserId", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "ModUserId", "@CodeTableName": "" }, { "@Type": "TXT", "@fsaSourceName": "LastName", "@ExtName": "lastName", "@DBName": "lname", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "LName", "@CodeTableName": "", "#text": "nk" }, { "@Type": "TXT", "@fsaSourceName": "FirstName", "@ExtName": "firstName", "@DBName": "fname", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "FName", "@CodeTableName": "", "#text": "nikhil" }, { "@Type": "TXT", "@fsaSourceName": "MiddleName", "@ExtName": "middleName", "@DBName": "mname", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "MName", "@CodeTableName": "" }, { "@Type": "COMBO", "@fsaSourceName": "Suffix", "@ExtName": "suffix", "@DBName": "NameSuffix", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "Suffix", "@CodeTableName": "NameSuffixes", "#text": "Sr." }, { "@Type": "HIDDEN", "@fsaSourceName": "DOB", "@ExtName": "biographicInfoForm.dateOfBirth", "@DBName": "dob", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "BirthDate", "@CodeTableName": "", "#text": "12/5/1999" }, { "@Type": "TXT", "@fsaSourceName": "DateOfBirthDay", "@ExtName": "biographicInfoForm.dateOfBirth2", "@DBName": "DateOfBirthDay", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "DateOfBirthDay", "@CodeTableName": "", "#text": "12" }, { "@Type": "TXT", "@fsaSourceName": "DateOfBirthMonth", "@ExtName": "biographicInfoForm.dateOfBirth1", "@DBName": "DateOfBirthMonth", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "DateOfBirthMonth", "@CodeTableName": "", "#text": "12" }, { "@Type": "TXT", "@fsaSourceName": "DateOfBirthYear", "@ExtName": "biographicInfoForm.dateOfBirth3", "@DBName": "DateOfBirthYear", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "DateOfBirthYear", "@CodeTableName": "", "#text": "2000" }, { "@Type": "TXT", "@fsaSourceName": "CityofBirth", "@ExtName": "biographicInfoForm.cityOfBirth", "@DBName": "citybirth", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "BirthCity", "@CodeTableName": "" }, { "@Type": "CHKBX", "@fsaSourceName": "Gender", "@ExtName": "GenderOutField", "@DBName": "gender", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "Gender", "@CodeTableName": "tblMaintGender", "#text": "M" }, { "@Type": "RADIOBTN", "@fsaSourceName": "Gender", "@ExtName": "biographicInfoForm.genderF", "@DBName": "genderF", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "GenderF", "@CodeTableName": "tblMaintGender" }, { "@Type": "RADIOBTN", "@fsaSourceName": "Gender", "@ExtName": "biographicInfoForm.genderM", "@DBName": "genderM", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "GenderM", "@CodeTableName": "tblMaintGender", "#text": "M" }, { "@Type": "RADIOBTN", "@fsaSourceName": "Gender", "@ExtName": "biographicInfoForm.genderU", "@DBName": "genderU", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "GenderU", "@CodeTableName": "tblMaintGender" }, { "@Type": "RADIOBTN", "@fsaSourceName": "CitizenshipStatusCode", "@ExtName": "CitizenshipStatusCodeOutField", "@DBName": "CitizenshipStatusCode", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "CitizenshipStatusCode", "@CodeTableName": "CitizenshipStatus" }, { "@Type": "RADIOBTN", "@fsaSourceName": "CitizenshipStatusCode", "@ExtName": "biographicInfoForm.citizenStatus03", "@DBName": "CitizenshipStatusCode03", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "CitizenshipStatusCode03", "@CodeTableName": "CitizenshipStatus" }, { "@Type": "RADIOBTN", "@fsaSourceName": "CitizenshipStatusCode", "@ExtName": "biographicInfoForm.citizenStatus04", "@DBName": "CitizenshipStatusCode04", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "CitizenshipStatusCode04", "@CodeTableName": "CitizenshipStatus" }, { "@Type": "COMBO", "@fsaSourceName": "COB", "@ExtName": "countryOfBirth", "@DBName": "cob", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "BirthCntryCode", "@CodeTableName": "tblMaintCountries", "#text": "IN" }, { "@Type": "COMBO", "@fsaSourceName": "COC", "@ExtName": "biographicInfoForm.countryOfCitizenship", "@DBName": "coc", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "CtznshipCntryCode", "@CodeTableName": "tblMaintCountries", "#text": "IN" }, { "@Type": "TXT", "@fsaSourceName": "LicenceNumber", "@ExtName": "biographicInfoForm.driversLicenseNumber", "@DBName": "LicenceNumber", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "LicNumber", "@CodeTableName": "" }, { "@Type": "COMBO", "@fsaSourceName": "LicenceState", "@ExtName": "biographicInfoForm.driversLicenseState", "@DBName": "LicenceState", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "LicState", "@CodeTableName": "USStates" }, { "@Type": "TXT", "@fsaSourceName": "PhoneCountryNumber1", "@ExtName": "biographicInfoForm.foreignCountryNumber", "@DBName": "Phone1CountryNumber", "@CustomPropertyId": "Permanent", "@Object": "Address", "@SeventDBName": "Phone1CountryNumber", "@CodeTableName": "", "#text": "1234" }, { "@Type": "HIDDEN", "@fsaSourceName": "Phone1", "@ExtName": "biographicInfoForm.USPhone", "@DBName": "Phone1", "@CustomPropertyId": "Local", "@Object": "Address", "@SeventDBName": "USNumber", "@CodeTableName": "", "#text": "1231234345" }, { "@Type": "TXT", "@fsaSourceName": "Phone1", "@ExtName": "biographicInfoForm.foreignPhone", "@DBName": "Phone1", "@CustomPropertyId": "Permanent", "@Object": "Address", "@SeventDBName": "ForeignNumber", "@CodeTableName": "", "#text": "987456321" }, { "@Type": "CHKBX", "@fsaSourceName": "TelephoneExempt", "@ExtName": "PhoneE", "@DBName": "TelephoneExempt", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "LicTelephoneExempt", "@CodeTableName": "", "#text": "0" }, { "@Type": "TXT", "@fsaSourceName": "Email", "@ExtName": "biographicInfoForm.emailAddress", "@DBName": "EMail", "@CustomPropertyId": "", "@Object": "EmailAddress", "@SeventDBName": "Email", "@CodeTableName": "", "#text": "asd@asd.com" }, { "@Type": "TXTAREA", "@fsaSourceName": "Remarks", "@ExtName": "financialInfoForm.remarks", "@DBName": "Remarks", "@CustomPropertyId": "", "@Object": "Profile", "@SeventDBName": "Remarks", "@CodeTableName": "", "#text": "Remarks about the Student Remarks about the Student Remarks about the Student Remarks about the Student Remarks about the Student Remarks about the Student Remarks about the Student Remarks about the Student Remarks about the Student Remarks about the Student Remarks about the Student Remarks about the Student Remarks about the Student Remarks about the Student Remarks about the Student" }, { "@Type": "", "@fsaSourceName": "SEVISId", "@ExtName": "SEVIS ID", "@DBName": "SEVISId", "@CustomPropertyId": "", "@Object": "Student", "@SeventDBName": "SEVISId", "@CodeTableName": "", "#text": "N0000127395" }, { "@Type": "DIV", "@fsaSourceName": "Address", "@ExtName": "USAddress_com_addr1_div", "@DBName": "Addr1", "@CustomPropertyId": "Local", "@Object": "Address", "@SeventDBName": "USAddr1", "@CodeTableName": "", "#text": "29 LOWDEN AVE" }, { "@Type": "HIDDEN", "@fsaSourceName": "Address", "@ExtName": "com_addr1", "@DBName": "Addr1", "@CustomPropertyId": "Local", "@Object": "Address", "@SeventDBName": "USAddr1", "@CodeTableName": "", "#text": "29 LOWDEN AVE" }, { "@Type": "DIV", "@fsaSourceName": "Address2", "@ExtName": "USAddress_com_addr2_div", "@DBName": "Addr2", "@CustomPropertyId": "Local", "@Object": "Address", "@SeventDBName": "USAddr2", "@CodeTableName": "" }, { "@Type": "HIDDEN", "@fsaSourceName": "Address2", "@ExtName": "com_addr2", "@DBName": "Addr2", "@CustomPropertyId": "Local", "@Object": "Address", "@SeventDBName": "USAddr2", "@CodeTableName": "" }, { "@Type": "DIV", "@fsaSourceName": "City", "@ExtName": "USAddress_com_city_div", "@DBName": "City", "@CustomPropertyId": "Local", "@Object": "Address", "@SeventDBName": "USCity", "@CodeTableName": "", "#text": "SOMERVILLE" }, { "@Type": "HIDDEN", "@fsaSourceName": "City", "@ExtName": "com_city", "@DBName": "City", "@CustomPropertyId": "Local", "@Object": "Address", "@SeventDBName": "USCity", "@CodeTableName": "", "#text": "SOMERVILLE" }, { "@Type": "DIV", "@fsaSourceName": "State", "@ExtName": "USAddress_com_state_code_div", "@DBName": "State", "@CustomPropertyId": "Local", "@Object": "Address", "@SeventDBName": "USState", "@CodeTableName": "USStates", "#text": "MA" }, { "@Type": "HIDDEN", "@fsaSourceName": "State", "@ExtName": "com_state_code", "@DBName": "State", "@CustomPropertyId": "Local", "@Object": "Address", "@SeventDBName": "USState", "@CodeTableName": "USStates", "#text": "MA" }, { "@Type": "HIDDEN", "@fsaSourceName": "State", "@ExtName": "twoLetterState", "@DBName": "State", "@CustomPropertyId": "Local", "@Object": "Address", "@SeventDBName": "USState", "@CodeTableName": "USStates" }, { "@Type": "DIV", "@fsaSourceName": "Zip", "@ExtName": "USAddress_com_postal_code_div", "@DBName": "Zip", "@CustomPropertyId": "Local", "@Object": "Address", "@SeventDBName": "USPostalCode", "@CodeTableName": "", "#text": "02144" }, { "@Type": "HIDDEN", "@fsaSourceName": "Zip", "@ExtName": "com_postal_code", "@DBName": "Zip", "@CustomPropertyId": "Local", "@Object": "Address", "@SeventDBName": "USPostalCode", "@CodeTableName": "", "#text": "02144" }, { "@Type": "DIV", "@fsaSourceName": "ZipRoutingCode", "@ExtName": "USAddress_com_routing_code_div", "@DBName": "ZipRoutingCode", "@CustomPropertyId": "Local", "@Object": "Address", "@SeventDBName": "USPostalRoutingCode", "@CodeTableName": "", "#text": "- 2159" }, { "@Type": "HIDDEN", "@fsaSourceName": "ZipRoutingCode", "@ExtName": "com_routing_code", "@DBName": "ZipRoutingCode", "@CustomPropertyId": "Local", "@Object": "Address", "@SeventDBName": "USPostalRoutingCode", "@CodeTableName": "", "#text": "2159" }, { "@Type": "TXT", "@fsaSourceName": "Address", "@ExtName": "foreignAddress.com_addr1", "@DBName": "Addr1", "@CustomPropertyId": "Permanent", "@Object": "Address", "@SeventDBName": "FrnAddr1", "@CodeTableName": "", "#text": "187" }, { "@Type": "TXT", "@fsaSourceName": "Address2", "@ExtName": "foreignAddress.com_addr2", "@DBName": "Addr2", "@CustomPropertyId": "Permanent", "@Object": "Address", "@SeventDBName": "FrnAddr2", "@CodeTableName": "" }, { "@Type": "TXT", "@fsaSourceName": "City", "@ExtName": "foreignAddress.com_city", "@DBName": "City", "@CustomPropertyId": "Permanent", "@Object": "Address", "@SeventDBName": "FrnCity", "@CodeTableName": "" }, { "@Type": "COMBO", "@fsaSourceName": "Country", "@ExtName": "foreignAddress.countryCode", "@DBName": "Country", "@CustomPropertyId": "Permanent", "@Object": "Address", "@SeventDBName": "CountryCode", "@CodeTableName": "tblMaintCountries", "#text": "IN" }, { "@Type": "TXT", "@fsaSourceName": "Zip", "@ExtName": "foreignAddress.com_postal_code", "@DBName": "Zip", "@CustomPropertyId": "Permanent", "@Object": "Address", "@SeventDBName": "FrnPostalCode", "@CodeTableName": "" }, { "@Type": "TXT", "@fsaSourceName": "Province", "@ExtName": "foreignAddress.province", "@DBName": "Province", "@CustomPropertyId": "Permanent", "@Object": "Address", "@SeventDBName": "FrnProvince", "@CodeTableName": "" }, { "@Type": "DIV", "@fsaSourceName": "Address", "@ExtName": "mailAddress_com_addr1_div", "@DBName": "Addr1", "@CustomPropertyId": "Mailing", "@Object": "Address", "@SeventDBName": "MailingUSAddr1", "@CodeTableName": "", "#text": "29 LOWDEN AVE" }, { "@Type": "HIDDEN", "@fsaSourceName": "Address", "@ExtName": "mailAddress_com_addr1", "@DBName": "Addr1", "@CustomPropertyId": "Mailing", "@Object": "Address", "@SeventDBName": "MailingUSAddr1", "@CodeTableName": "", "#text": "29 LOWDEN AVE" }, { "@Type": "DIV", "@fsaSourceName": "Address2", "@ExtName": "mailAddress_com_addr2_div", "@DBName": "Addr2", "@CustomPropertyId": "Mailing", "@Object": "Address", "@SeventDBName": "MailingUSAddr2", "@CodeTableName": "" }, { "@Type": "HIDDEN", "@fsaSourceName": "Address2", "@ExtName": "mailAddress_com_addr2", "@DBName": "Addr2", "@CustomPropertyId": "Mailing", "@Object": "Address", "@SeventDBName": "MailingUSAddr2", "@CodeTableName": "" }, { "@Type": "DIV", "@fsaSourceName": "City", "@ExtName": "mailAddress_com_city_div", "@DBName": "City", "@CustomPropertyId": "Mailing", "@Object": "Address", "@SeventDBName": "MailingUSCity", "@CodeTableName": "", "#text": "SOMERVILLE" }, { "@Type": "HIDDEN", "@fsaSourceName": "City", "@ExtName": "mailAddress_com_city", "@DBName": "City", "@CustomPropertyId": "Mailing", "@Object": "Address", "@SeventDBName": "MailingUSCity", "@CodeTableName": "", "#text": "SOMERVILLE" }, { "@Type": "DIV", "@fsaSourceName": "State", "@ExtName": "mailAddress_com_state_code_div", "@DBName": "State", "@CustomPropertyId": "Mailing", "@Object": "Address", "@SeventDBName": "MailingUSState", "@CodeTableName": "USStates", "#text": "MA" }, { "@Type": "HIDDEN", "@fsaSourceName": "State", "@ExtName": "mailAddress_com_state_code", "@DBName": "State", "@CustomPropertyId": "Mailing", "@Object": "Address", "@SeventDBName": "MailingUSState", "@CodeTableName": "USStates", "#text": "MA" }, { "@Type": "DIV", "@fsaSourceName": "Zip", "@ExtName": "mailAddress_com_postal_code_div", "@DBName": "Zip", "@CustomPropertyId": "Mailing", "@Object": "Address", "@SeventDBName": "MailingUSPostalCode", "@CodeTableName": "", "#text": "02144" }, { "@Type": "HIDDEN", "@fsaSourceName": "Zip", "@ExtName": "mailAddress_com_postal_code", "@DBName": "Zip", "@CustomPropertyId": "Mailing", "@Object": "Address", "@SeventDBName": "MailingUSPostalCode", "@CodeTableName": "", "#text": "02144" }, { "@Type": "DIV", "@fsaSourceName": "ZipRoutingCode", "@ExtName": "mailAddress_com_routing_code_div", "@DBName": "ZipRoutingCode", "@CustomPropertyId": "Mailing", "@Object": "Address", "@SeventDBName": "MailingUSPostalRoutingCode", "@CodeTableName": "", "#text": "- 2159" }, { "@Type": "HIDDEN", "@fsaSourceName": "ZipRoutingCode", "@ExtName": "mailAddress_com_routing_code", "@DBName": "ZipRoutingCode", "@CustomPropertyId": "Mailing", "@Object": "Address", "@SeventDBName": "MailingUSPostalRoutingCode", "@CodeTableName": "", "#text": "2159" }, { "@Type": "CHKBX", "@fsaSourceName": "IsCommuter", "@ExtName": "commuterFlag", "@DBName": "Commuter", "@CustomPropertyId": "", "@Object": "Profile", "@SeventDBName": "Commuter", "@CodeTableName": "", "#text": "0" }] } } }, "IsSevisIdMatched": false, "IsSecondaryMatched": false, "ContextName": "PersonalInfoUpdate" }


    var sevid = sessionStorage.getItem("sidsession");
    var pksysidup = sessionStorage.getItem("pksysidses");

    obj.ParamDoc.Context.Fields.Field[28]["#text"] = sevid;
    obj.ParamDoc.Context.Fields.Field[0]["#text"] = pksysidup;


    obj.ParamDoc.Context.Fields.Field[2]["#text"] = upname;
    obj.ParamDoc.Context.Fields.Field[3]["#text"] = lastupname;






    (async () => {




        const rawResponse = await fetch('http://localhost/WebAPI/api/rtiaccess/UpdateStudentData', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        const content = await rawResponse.json();
        console.log(content);
    })();





}