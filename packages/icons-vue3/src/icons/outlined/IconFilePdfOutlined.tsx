// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FilePdfOutlinedSvg from 'icon-base/es/asn/FilePdfOutlined';

export interface FilePdfOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFilePdfOutlined: FilePdfOutlinedIconType = (props, context) => (
    <Icon name='FilePdfOutlined' {...{ ...props, ...context.attrs }} icon={FilePdfOutlinedSvg} />
);

IconFilePdfOutlined.displayName = 'IconFilePdfOutlined';

export default IconFilePdfOutlined;
