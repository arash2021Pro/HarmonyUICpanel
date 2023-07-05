import * as yup from "yup";

export const schema = yup.object().shape({

    password: yup.string().required('کلمه عبور الزامیست').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,"پسورد شامل یک حرف بزرگ یک حرف کوچیک یک کارکتر خاص و عدد میباشد"),
    username:yup.string().required('نام کاربری الزامیست').matches(/^(?:[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})?[\s\S]*$/,'فرمت ایمیل وارد شده صحیح نمیباشد'),
    isRemembered: yup.bool().oneOf([true], 'ابتدا باید با شرایط را قبول کنید')
});

