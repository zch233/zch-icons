// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CompressOutlinedSvg from 'icon-base/es/asn/CompressOutlined';

export interface CompressOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCompressOutlined: CompressOutlinedIconType = (props, context) => (
    <Icon name='CompressOutlined' {...{ ...props, ...context.attrs }} icon={CompressOutlinedSvg} />
);

IconCompressOutlined.displayName = 'IconCompressOutlined';

export default IconCompressOutlined;
