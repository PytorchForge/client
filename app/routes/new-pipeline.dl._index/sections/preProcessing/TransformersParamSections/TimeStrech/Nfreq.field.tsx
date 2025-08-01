import React from "react"
import type { UseFormReturn } from "react-hook-form"
import type { PipelineDL } from "~/types/pipelineDL"
import { cn } from "~/utils/general"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/Form"
import { InputNumber } from "~/components/InputNumber";

type NfreqFieldProps = {
  form: UseFormReturn<PipelineDL>
} & React.ComponentProps<"div">

export function NfreqField({ className, form, ...delegated }: NfreqFieldProps) {
  return (
    <FormField
      control={form.control}
      name="transformersData.TimeStrech.n_freq"
      render={({ field }) => (
        <FormItem className={cn("", className)} {...delegated}>
          <FormLabel>Num of freq. bins</FormLabel>
          <FormControl>
            <InputNumber field={field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
