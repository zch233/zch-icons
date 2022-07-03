// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FilePdfFilledSvg from 'icons-base/es/asn/FilePdfFilled';

export interface FilePdfFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFilePdfFilled: FilePdfFilledIconType = (props, context) => <Icon name='FilePdfFilled' {...{ ...props, ...context.attrs }} icon={FilePdfFilledSvg} />;

IconFilePdfFilled.displayName = 'IconFilePdfFilled';
IconFilePdfFilled.theme = 'filled';
IconFilePdfFilled.originName = 'file-pdf';

export default IconFilePdfFilled;
