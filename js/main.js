$(document).ready(function() {
    const array = [
        {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        }
    ];

    const colors = [
        'blue',
        'orange',
        'purple'
    ]

    //Vado a prendere i type che mi serviranno per colorare le icone
    const types = [];

    
    array.forEach((element) => {
        if(!types.includes(element.type)) {
            types.push(element.type);
        }
    });

    //aggiungo il colore in base all'indice del type
    array.map((element) => {
        const myType = types.indexOf(element.type);
        if(myType != -1) {
            element.color = colors[myType];
        }
    })

    const containerIcons = $('.icons');
    
    //Popolo la sezione icons del mio HTML
    containerIcons.html('');

    array.forEach((element) => {
        const {name, prefix, family, color} = element;

        const elementHTML = `
        <div>
            <i style="color:${color};" class ="${family} ${prefix}${name}"></i>
            <div class ="name">${name.toUpperCase()}</div>
        </div>
        `

        containerIcons.append(elementHTML);

    });

    const select = $('#type');
     
    //Vado a popolare la mia select con le option
    types.forEach((element) => {
        select.append(`<option value="${element}">${element}</option>`);
    });

    //Collego il type con il filtro
    select.change({containerIcons}, function (event) {
        const containerIcons = event.data.containerIcons;
        const selection = $(this).val();
        
        //filtro gli elementi che mi servono per type
        const filtered = array.filter((element) => {
            return element.type == selection;
        });

        containerIcons.html('');

        //Vado a ciclare sull'array filtrato per type
        filtered.forEach((element) => {
            const {name, prefix, family, color} = element;
    
            const elementHTML = `
            <div>
                <i style="color:${color};" class ="${family} ${prefix}${name}"></i>
                <div class ="name">${name.toUpperCase()}</div>
            </div>
            `
    
            containerIcons.append(elementHTML);
    
        });


    });

})