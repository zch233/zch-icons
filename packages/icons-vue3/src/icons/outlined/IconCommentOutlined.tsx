// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CommentOutlinedSvg from 'gupo-icons-base/es/asn/CommentOutlined';

export interface CommentOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCommentOutlined: CommentOutlinedIconType = (props, context) => (
    <Icon name='CommentOutlined' {...{ ...props, ...context.attrs }} icon={CommentOutlinedSvg} />
);

IconCommentOutlined.displayName = 'IconCommentOutlined';
IconCommentOutlined.theme = 'outlined';
IconCommentOutlined.originName = 'comment';

export default IconCommentOutlined;
