import { WithTranslation } from "react-i18next";

export interface ContentBlockProps extends Partial<WithTranslation>{
  icon: string;
  title: string;
  content: string;
  section?: any;
  button?: any;
  id: string;
  type?: string;
}
