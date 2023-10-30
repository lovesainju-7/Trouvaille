"use client";

import * as z from "zod";
import { MessageSquare, MessagesSquare, MessagesSquareIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import { formSchema } from "./constants";
import { Input } from "@/components/ui/input";

const ConversationPage = () => {
  const router = useRouter();


  const form = useForm<z.infer<typeof formSchema>>({

    defaultValues: {
      prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async ( values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return ( 
    <div>
      < Heading
        title="Conversation"
        description="Our most advanced conversation model."
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10" 
        icon={""}      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form 

              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
              name="prompt"
              render={ ({ field})=>  (
                <FormItem className="clo-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input className=" border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isLoading}
                    placeholder="What is the radius of Earth?"
                    {...field}
                    />
                  </FormControl>            
                </FormItem>
              )}
              />
             
              <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4" >
                our Message box
        </div>

      </div>
    </div>
   );
}
 
export default ConversationPage;
