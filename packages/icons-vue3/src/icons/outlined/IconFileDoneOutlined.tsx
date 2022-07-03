// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileDoneOutlinedSvg from 'icons-base/es/asn/FileDoneOutlined';

export interface FileDoneOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileDoneOutlined: FileDoneOutlinedIconType = (props, context) => (
    <Icon name='FileDoneOutlined' {...{ ...props, ...context.attrs }} icon={FileDoneOutlinedSvg} />
);

IconFileDoneOutlined.displayName = 'IconFileDoneOutlined';
IconFileDoneOutlined.theme = 'outlined';
IconFileDoneOutlined.originName = 'file-done';

export default IconFileDoneOutlined;
