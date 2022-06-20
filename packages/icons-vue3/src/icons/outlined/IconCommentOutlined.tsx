// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CommentOutlinedSvg from 'icon-base/es/asn/CommentOutlined';

export interface CommentOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCommentOutlined: CommentOutlinedIconType = (props, context) => (
    <Icon name='CommentOutlined' {...{ ...props, ...context.attrs }} icon={CommentOutlinedSvg} />
);

IconCommentOutlined.displayName = 'IconCommentOutlined';

export default IconCommentOutlined;
