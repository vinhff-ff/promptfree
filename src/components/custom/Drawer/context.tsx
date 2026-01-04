import { createContext, useContext, useState } from "react";
import type {ReactNode} from "react";
import CustomDrawer from "./drawer";

interface DrawerContextType {
  openDrawer: (content: ReactNode, title?: string) => void;
  closeDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) throw new Error("useDrawer must be used within DrawerProvider");
  return context;
};

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);
  const [title, setTitle] = useState<string>("");

  const openDrawer = (drawerContent: ReactNode, drawerTitle?: string) => {
    setContent(drawerContent);
    if (drawerTitle) setTitle(drawerTitle);
    setOpen(true);
  };

  const closeDrawer = () => setOpen(false);

  return (
    <DrawerContext.Provider value={{ openDrawer, closeDrawer }}>
      {children}
      <CustomDrawer open={open} onClose={closeDrawer} title={title}>
        {content}
      </CustomDrawer>
    </DrawerContext.Provider>
  );
};
