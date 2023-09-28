import * as DropdownComponent from "@radix-ui/react-dropdown-menu";

interface DropdownProps extends DropdownComponent.DropdownMenuProps {
  children: React.ReactNode;
  render: React.ReactNode;
}

export function Dropdown({ render, children, ...rest }: DropdownProps) {
  return (
    <DropdownComponent.Root {...rest}>
      <DropdownComponent.Trigger className="group" asChild>
        {children}
      </DropdownComponent.Trigger>

      <DropdownComponent.Portal>
        <DropdownComponent.Content
          hideWhenDetached
          className="z-[35]"
          sideOffset={10}
          align="start"
        >
          {render}
        </DropdownComponent.Content>
      </DropdownComponent.Portal>
    </DropdownComponent.Root>
  );
}
