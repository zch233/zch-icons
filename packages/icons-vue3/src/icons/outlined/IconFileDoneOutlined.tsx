// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileDoneOutlinedSvg from 'icon-base/es/asn/FileDoneOutlined';

export interface FileDoneOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileDoneOutlined: FileDoneOutlinedIconType = (props, context) => (
    <Icon name='FileDoneOutlined' {...{ ...props, ...context.attrs }} icon={FileDoneOutlinedSvg} />
);

IconFileDoneOutlined.displayName = 'IconFileDoneOutlined';

export default IconFileDoneOutlined;
