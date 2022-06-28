// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FilePptOutlinedSvg from 'gupo-icons-base/es/asn/FilePptOutlined';

export interface FilePptOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFilePptOutlined: FilePptOutlinedIconType = (props, context) => (
    <Icon name='FilePptOutlined' {...{ ...props, ...context.attrs }} icon={FilePptOutlinedSvg} />
);

IconFilePptOutlined.displayName = 'IconFilePptOutlined';
IconFilePptOutlined.theme = 'outlined';
IconFilePptOutlined.originName = 'file-ppt';

export default IconFilePptOutlined;
