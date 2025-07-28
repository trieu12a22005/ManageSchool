import { toast } from "react-hot-toast";

export interface RegisterFormData {
    fullName: string;
    email: string;
    birth: string;
    password: string;
    confirm: string;
    address: string;
    username: string;
}

// Hàm trả về true/false để biết có hợp lệ không
export const CheckData = (formRegister: RegisterFormData): boolean => {
    if (!formRegister.fullName || !formRegister.email || !formRegister.username) {
        toast.error("Vui lòng nhập đầy đủ thông tin bắt buộc!", { position: "top-right" });
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formRegister.email)) {
        toast.error("Email không hợp lệ!", { position: "top-right" });
        return false;
    }

    if (formRegister.password.length < 8) {
        toast.error("Mật khẩu phải ít nhất 8 ký tự!", { position: "top-right" });
        return false;
    }

    if (formRegister.password !== formRegister.confirm) {
        toast.error("Mật khẩu xác nhận không khớp!", { position: "top-right" });
        return false;
    }
    return true;
};
