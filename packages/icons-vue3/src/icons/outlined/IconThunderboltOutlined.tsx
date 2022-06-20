// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ThunderboltOutlinedSvg from 'icon-base/es/asn/ThunderboltOutlined';

export interface ThunderboltOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconThunderboltOutlined: ThunderboltOutlinedIconType = (props, context) => (
    <Icon name='ThunderboltOutlined' {...{ ...props, ...context.attrs }} icon={ThunderboltOutlinedSvg} />
);

IconThunderboltOutlined.displayName = 'IconThunderboltOutlined';

export default IconThunderboltOutlined;
