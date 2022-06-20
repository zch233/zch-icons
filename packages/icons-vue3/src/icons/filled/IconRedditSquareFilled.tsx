// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RedditSquareFilledSvg from 'icon-base/es/asn/RedditSquareFilled';

export interface RedditSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRedditSquareFilled: RedditSquareFilledIconType = (props, context) => (
    <Icon name='RedditSquareFilled' {...{ ...props, ...context.attrs }} icon={RedditSquareFilledSvg} />
);

IconRedditSquareFilled.displayName = 'IconRedditSquareFilled';

export default IconRedditSquareFilled;
