// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DislikeOutlinedSvg from 'icon-base/es/asn/DislikeOutlined';

export interface DislikeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDislikeOutlined: DislikeOutlinedIconType = (props, context) => (
    <Icon name='DislikeOutlined' {...{ ...props, ...context.attrs }} icon={DislikeOutlinedSvg} />
);

IconDislikeOutlined.displayName = 'IconDislikeOutlined';

export default IconDislikeOutlined;
