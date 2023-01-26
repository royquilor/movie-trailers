import * as Avatar from "@radix-ui/react-avatar";

const AvatarDemo = () => (
  <Avatar.Root className="AvatarRoot inline-flex items-center justify-center overflow-hidden w-24 h-24 rounded-full bg-slate-900">
    <Avatar.Image
      className="AvatarImage w-100 h-100 object-cover"
      src="./roy.jpg"
      alt="Roy Quilor"
    />
    <Avatar.Fallback className="AvatarFallback" delayMs={600}>
      RQ
    </Avatar.Fallback>
  </Avatar.Root>
);

export default AvatarDemo;
