// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FilePdfTwotoneSvg from 'icons-base/es/asn/FilePdfTwotone';

export interface FilePdfTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFilePdfTwotone: FilePdfTwotoneIconType = (props, context) => (
    <Icon name='FilePdfTwotone' {...{ ...props, ...context.attrs }} icon={FilePdfTwotoneSvg} />
);

IconFilePdfTwotone.displayName = 'IconFilePdfTwotone';
IconFilePdfTwotone.theme = 'twotone';
IconFilePdfTwotone.originName = 'file-pdf';

export default IconFilePdfTwotone;
