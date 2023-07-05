import * as yup from "yup";

export const schema = yup.object().shape({
    username: yup.string().required('نام کاربری الزامیست'),
    password: yup.string().required('کلمه عبور الزامیست').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,"پسورد شامل یک حرف بزرگ یک حرف کوچیک یک کارکتر خاص و عدد میباشد"),
    email:yup.string().required('ایمیل الزامیست').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'فرمت ایمیل وارد شده صحیح نمیباشد'),
    lastname:yup.string().required('نام خانوادگی الزامیست'),
    repeatedPass:yup.string().required('تکرار کلمه عبور الزامیست').oneOf([yup.ref('password'), null], 'تکرار کلمه عبور با کلمه عبور مطابقت ندارد'),
    agreed: yup.bool().oneOf([true], 'ابتدا باید با شرایط را قبول کنید')
});

