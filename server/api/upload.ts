import formidable from 'formidable';

const form = formidable({ multiples: true });

export default defineEventHandler(async event => {
    // await new Promise((resolve, reject) => {
    //     form.parse(event.event.req, async (err, fields, files) => {
    //         if (err) throw err;
    //         resolve({category: fields.category, files})
    //         console.log(files);
    //     });
    // })
    const formData = await form.parse(event.event.req);
    console.log(formData);
    return { code: 200, message: 'success', data: null };
});
