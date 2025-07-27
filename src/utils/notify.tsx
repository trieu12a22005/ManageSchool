import { toast } from 'react-hot-toast'
export function notifyError(message: string) {
    return toast.error(message || "something went wrong");
}
export function notifySuccess(message: string) {
    return toast.success(message);
}