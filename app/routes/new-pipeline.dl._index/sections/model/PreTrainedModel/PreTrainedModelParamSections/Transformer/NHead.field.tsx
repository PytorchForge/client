import React from "react"
import { cn } from "~/utils/general"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/Form"
import type { UseFormReturn } from "react-hook-form"
import type { PipelineDL } from "~/types/pipelineDL"
import { InputNumber } from "~/components/InputNumber";


type NHeadFieldProps = {
  form: UseFormReturn<PipelineDL>
} & React.ComponentProps<"div">

export function NHeadField({ className, form, ...delegated }: NHeadFieldProps) {
  return (
    <FormField
      control={form.control}
      name="pretrainedModelsData.Transformer.nhead"
      render={({ field }) => (
        <FormItem className={cn("", className)} {...delegated}>
          <FormLabel>Num of heads</FormLabel>
          <FormControl>
            <InputNumber field={field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
