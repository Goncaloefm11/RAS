"use client";

import { useState } from "react";
import { PRESETS, PresetName } from "@/lib/presets";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
  project: any;
  token: string;
  onClose: () => void;
  onApplyPreset?: (preset: any) => void;
}

export default function PresetsPanel({ project, token, onClose }: Props) {
  const { toast } = useToast();
  const [selected, setSelected] = useState<PresetName | null>(null);

  const applyPreset = async () => {
    if (!selected) return;

    const tools = PRESETS[selected];

    try {
      for (const tool of tools) {
        await fetch(`/api/projects/${project._id}/tools`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            type: tool.type,
            payload: { value: tool.value },
          }),
        });
      }

      toast({
        title: "Preset applied!",
        description: `The preset "${selected}" was successfully applied.`,
      });

      onClose();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to apply preset.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose a preset</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-3 mt-4">
          {Object.keys(PRESETS).map((p) => (
            <button
              key={p}
              onClick={() => setSelected(p as PresetName)}
              className={`p-3 border rounded ${
                selected === p ? "bg-blue-500 text-white" : ""
              }`}
            >
              {p.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={applyPreset}
            disabled={!selected}
            className="bg-blue-600 text-white"
          >
            Apply
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
