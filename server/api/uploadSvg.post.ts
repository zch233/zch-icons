import formidable from 'formidable';

const form = formidable({ multiples: true });

// export default defineEventHandler(async event => {
//   const data = await useBody(event)
//   // console.log(event);
//   form.parse(event.req, async (err, fields, files) => {
//     console.log(err);
//     console.log(fields, 11);
//     console.log(files, 22);
//   })
//   return 123
// })

export default (req, res) => {
    form.parse(req, async (err, fields, files) => {
        console.log(err);
        console.log(fields);
        console.log(files);
    });
    return 123;
};
