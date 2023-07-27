import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { BoltIcon } from "@heroicons/react/20/solid";

const Info = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button aria-label="more" variant="secondary" size="icon">
          <BoltIcon className="h-5 w-5 md:h-4 md:w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="font-medium leading-none border-b border-dashed pb-2">
              Shortcuts
            </h4>
            <div className="text-sm text-muted-foreground ">
              <ul className="flex flex-col gap-1">
                <li>Spacebar - Play/Pause</li>
                <li>N - Next track</li>
                <li>M - Mute</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-medium leading-none border-b border-dashed pb-2">
              About
            </h4>
            <div className="text-sm text-muted-foreground ">
              <ul className="flex flex-col gap-1">
                <li>
                  An open-source{" "}
                  <a
                    className="underline underline-offset-2 font-semibold hover:text-foreground"
                    href="https://github.com/r4vit3j4/musica-frontend"
                    target="_blank"
                  >
                    project
                  </a>{" "}
                  made by{" "}
                  <a
                    className="underline underline-offset-2 font-semibold whitespace-nowrap hover:text-foreground"
                    href="https://itsraviteja.vercel.app"
                    target="_blank"
                  >
                    Ravi Teja
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Info;
