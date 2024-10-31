"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { addReview } from "@/app/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
  FormDescription,
} from "./ui/form";
import Rating from "./ui/rating";
import { useMemo } from "react";

const formSchema = z.object({
  comment: z.string().min(5).max(50),
  rating: z.number().min(1, { message: "Required!" }).max(5),
});

const SubmitForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
      rating: 0,
    },
  });

  const isSubmitting = useMemo(
    () => form.formState.isSubmitting,
    [form.formState.isSubmitting]
  );

  const onSubmit = (values: z.infer<typeof formSchema>) =>
    addReview(values).then((error) => {
      if (error) toast.error(error.message);
      else toast.success("Successfully done!");
    });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="rating"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <Rating rating={value} onRate={onChange} />
              </FormControl>
              <FormDescription>Rate the product from 1 to 5.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormDescription>
                This comment will be shown to public.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default SubmitForm;
