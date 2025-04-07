export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [

        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'otherPrice',
            title: 'Other Price',
            type: 'number',
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Discounted', value: 'DISCOUNTED' },
                    { title: 'New', value: 'NEW' },
                    { title: 'Other', value: 'OTHER' },
                ],
                layout: 'dropdown',
            },
        },
        {
            name: 'typeValue',
            title: 'Type Value',
            type: 'string',
        },
    ]
}