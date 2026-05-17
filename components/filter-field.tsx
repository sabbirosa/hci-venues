"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

export interface FilterOption {
  value: string
  label: string
}

export function FilterField({
  label,
  labelExtra,
  value,
  onValueChange,
  options,
}: {
  label: string
  labelExtra?: React.ReactNode
  value: string
  onValueChange: (value: string) => void
  options: FilterOption[]
}) {
  const useSelect = options.length > 3

  return (
    <div className="space-y-2">
      <Label className="text-muted-foreground tracking-widest">
        {label}
        {labelExtra}
      </Label>
      {useSelect ? (
        <Select value={value} onValueChange={onValueChange}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <div className="flex flex-wrap gap-1">
          {options.map((opt) => (
            <Button
              key={opt.value}
              type="button"
              size="sm"
              variant={value === opt.value ? "default" : "outline"}
              className={cn("flex-1")}
              onClick={() => onValueChange(opt.value)}
            >
              {opt.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}
