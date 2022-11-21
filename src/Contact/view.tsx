import { BiSend } from "react-icons/bi";
import { IProps } from "./model";

export const View = (props: IProps) => {
    return (
        <div className="tw-pt-20 tw-mb-8">
            <div className="tw-text-center">
                <p className="laptop:tw-text-4xl tablet:tw-text-3xl tw-text-primary">Contact Me</p>
                <p className="laptop:tw-text-xl tablet:tw-text-lg tw-text-secondary">Get in touch</p>
            </div>
            <form ref={props.form} onSubmit={props.action_submit}>
                <div>
                    <input
                        placeholder="Email"
                        className="tw-mb-8 tw-pl-2 laptop:tw-text-xl tablet:tw-text-lg tw-placeholder-background tw-bg-secondary tw-border-2 border-slate-300 tw-w-1/4 tw-rounded-md tw-h-10"
                        name="email"
                        type="email"
                        value={props.form_data.email}
                        onChange={props.handleChange}
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Message"
                        className="tw-mb-8 laptop:tw-text-2xl tablet:tw-text-xl tw-placeholder-background tw-pt-2 tw-pl-1 tw-bg-secondary tw-border-2 border-slate-300 tw-w-1/3 tw-rounded-md tw-h-32"
                        name="message"
                        value={props.form_data.message}
                        onChange={props.handleChange}
                    />
                </div>
                <button type="submit" className=" tw-rounded-md tw-h-16 tw-w-32 laptop:tw-text-xl tablet:tw-text-lg tw-flex tw-justify-center tw-items-center tw-bg-purple tw-text-primary">Submit <BiSend className="tw-pl-2 laptop:tw-text-2xl tablet:tw-text-xl" /></button>
            </form>
        </div>
    )
}