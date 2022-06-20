// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RedditOutlinedSvg from 'icon-base/es/asn/RedditOutlined';

export interface RedditOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRedditOutlined: RedditOutlinedIconType = (props, context) => (
    <Icon name='RedditOutlined' {...{ ...props, ...context.attrs }} icon={RedditOutlinedSvg} />
);

IconRedditOutlined.displayName = 'IconRedditOutlined';

export default IconRedditOutlined;
