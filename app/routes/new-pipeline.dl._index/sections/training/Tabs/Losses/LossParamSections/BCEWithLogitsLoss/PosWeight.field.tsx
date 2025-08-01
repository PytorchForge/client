import React from "react";
import type { UseFormReturn } from "react-hook-form";
import type { PipelineDL } from "~/types/pipelineDL";
import { cn } from "~/utils/general";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/Form"
import { InputNumberArray } from "~/components/InputNumberArray";

type PosWeightFieldProps = {
  form: UseFormReturn<PipelineDL>
} & React.ComponentProps<'div'>

export function PosWeightField({ 
  className, 
  form,
  ...delegated
}: PosWeightFieldProps) {
  
  return (
    <FormField
      control={form.control}
      name="lossesData.BCEWithLogitsLoss.pos_weight"
      render={({ field }) => (
        <FormItem className={cn('', className)} {...delegated}>
          <FormLabel>Positive Class Weight</FormLabel>
          <InputNumberArray
            field={field}
            placeholder="5, 5, 8"
            helperText="Enter numbers separated by commas (e.g., 800, 600, 3)"
          />
          <FormMessage />
        </FormItem>
      )}
    />
  )
}