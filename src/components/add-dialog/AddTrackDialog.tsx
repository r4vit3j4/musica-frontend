"use client";
import { PlusIcon } from "@heroicons/react/20/solid";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { postTrack } from "@/redux/features/player/services";
import { useToast } from "../ui/use-toast";
import { DialogClose } from "@radix-ui/react-dialog";

const AddTrack = () => {
  const { toast } = useToast();

  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    trackName: "",
    artist: "",
    track: null,
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isFile = e.target.name === "track";

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: isFile ? e.target.files?.[0] : e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.track !== null) {
      dispatch(
        postTrack({
          trackName: formData.trackName,
          artist: formData.artist,
          track: formData.track,
        })
      )
        .unwrap()
        .then((data) => {
          setFormData({
            trackName: "",
            artist: "",
            track: null,
          });

          toast({
            title: `Track uploaded sucessfully!`,
            description: `${data.trackName}`,
          });
        });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="secondary">
          <PlusIcon className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>Add track</DialogHeader>
        <div className="mt-2">
          <form
            encType="multipart/form-data"
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2 w-full max-w-sm">
              <Label htmlFor="trackName">Track Name</Label>
              <Input
                id="trackName"
                name="trackName"
                type="text"
                placeholder="Track Name"
                value={formData.trackName}
                onChange={handleFormChange}
              />
            </div>
            <div className="flex flex-col gap-2 w-full max-w-sm">
              <Label htmlFor="artist">Artist Name</Label>
              <Input
                id="artist"
                name="artist"
                type="text"
                placeholder="Artist Name"
                value={formData.artist}
                onChange={handleFormChange}
              />
            </div>
            <div className="flex flex-col gap-2 w-full max-w-sm">
              <Label htmlFor="track">Track</Label>
              <Input
                id="track"
                name="track"
                type="file"
                onChange={handleFormChange}
              />
            </div>
            <DialogClose asChild>
              <Button type="submit">Upload</Button>
            </DialogClose>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddTrack;
