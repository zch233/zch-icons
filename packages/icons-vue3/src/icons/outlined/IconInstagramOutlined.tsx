// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InstagramOutlinedSvg from 'icon-base/es/asn/InstagramOutlined';

export interface InstagramOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconInstagramOutlined: InstagramOutlinedIconType = (props, context) => (
    <Icon name='InstagramOutlined' {...{ ...props, ...context.attrs }} icon={InstagramOutlinedSvg} />
);

IconInstagramOutlined.displayName = 'IconInstagramOutlined';

export default IconInstagramOutlined;
