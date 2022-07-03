// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DislikeOutlinedSvg from 'icons-base/es/asn/DislikeOutlined';

export interface DislikeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDislikeOutlined: DislikeOutlinedIconType = (props, context) => (
    <Icon name='DislikeOutlined' {...{ ...props, ...context.attrs }} icon={DislikeOutlinedSvg} />
);

IconDislikeOutlined.displayName = 'IconDislikeOutlined';
IconDislikeOutlined.theme = 'outlined';
IconDislikeOutlined.originName = 'dislike';

export default IconDislikeOutlined;
