class Storage {


    static unload_data() {

        let data = JSON.parse(localStorage.getItem("data"));
        console.log(data);

        if(!data) {
            let element_error = `<p class="text-warning p-3">No data</p>`;
            $(element_error).appendTo(".results");
        }

        else {
            console.log(typeof(data));
            let element_result = (`<p class="text-success p-3">This is the data: ${data}</p>`);
            $(element_result).appendTo(".results");
        }

    }

    static upload_data(input_element) {

        if(input_element.length >= 1) {

            let data = JSON.parse(localStorage.getItem("data"));
            
            if (!data || data.length == 0) {

                let array = [];
                array.push(input_element);
                localStorage.setItem("data", JSON.stringify(array));

            }

            if (data) {
                data.push(input_element);
                localStorage.setItem("data", JSON.stringify(data));
            }

            let element = `<p class="p-3">Added the element: ${input_element}</p>`;
            $(".status-upload").append(element);

        }

        else {

            let error_2 = `<p class="p-3 text-warning">Nothing to upload</p>`;
            $(".status-upload").append(error_2);

        }

    }

    static clear_data() {
        localStorage.clear();
    }

}

$(document).ready(function () {
    

    $('.unload').on('click', function(){
        
        $(".results").empty();
        $('.status-upload').empty();

        Storage.unload_data();
    })

    $('.save').on('click', function(){

        $('.status-upload').empty();
        $(".results").empty();


        value1 = $(".input-to-save").val();
        Storage.upload_data(value1);
    })

    $('.clear').on('click', function() {

        $('.status-upload').empty();
        $(".results").empty();

        Storage.clear_data();
    })

});