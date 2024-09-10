" use client";
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { mailScehma } from "@/schemas/mail-schema";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useWindowSize } from "usehooks-ts";
import { useState, useEffect } from "react";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
type SendEmailModelProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  emailValue: string;
  setEmailValue: React.Dispatch<React.SetStateAction<string>>;
};
const SendEmailModel = ({
  isOpen,
  onOpenChange,
  emailValue,
  setEmailValue,
}: SendEmailModelProps) => {
  const { width } = useWindowSize();
  const [key, setKey] = useState(0);
  const form = useForm<z.infer<typeof mailScehma>>({
    resolver: zodResolver(mailScehma),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const handelSubmit = (values: z.infer<typeof mailScehma>) => {
    const validateFields = mailScehma.safeParse(values);

    if (!validateFields.success) {
      return;
    }
    const templateParams = {
      from_email: values.email,
      from_name: values.name,
      message: values.message,
    };

    const promise = emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_API_KEY,
        }
      )
      .then(() => {
        form.reset();
        setEmailValue("");
        onOpenChange();
      })
      .catch((error) => {
        throw new Error(error);
      });
    toast.promise(promise, {
      loading: "Sending...",
      success: "Email sent successfully",
      error: "Email sending failed",
    });
  };

  useEffect(() => {
    if (emailValue) {
      form.setValue("email", emailValue);
    }
  }, [emailValue]);
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size={width > 640 ? "lg" : width > 440 ? "sm" : "xs"}
      placement="center"
    >
      <ModalContent className="bg-[#111928]">
        <ModalHeader className=" flex flex-col gap-y-4">
          <h2 className=" text-xl font-bold text-white">Send Email</h2>
          <p className=" text-sm text-gray-400">
            Please fill the form below to send us an email and we will get back
            to you as soon as possible.
          </p>
        </ModalHeader>
        <ModalBody>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handelSubmit)}
              className="space-y-6 w-full"
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          disabled={false}
                          placeholder="Email"
                          className=" bg-gray-800 border-gray-700"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          disabled={false}
                          placeholder="Full name"
                          className=" bg-gray-800 border-gray-700"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          disabled={false}
                          placeholder="Your message"
                          className=" bg-gray-800 border-gray-700"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              {/* <FormErrorMessage message={state.error } />
                    <FormSucessMessage message={state.success} /> */}
              <Button type="submit" size="lg" className="w-full">
                Send
              </Button>
            </form>
          </Form>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SendEmailModel;
