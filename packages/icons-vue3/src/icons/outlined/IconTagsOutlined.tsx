// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TagsOutlinedSvg from 'icons-base/es/asn/TagsOutlined';

export interface TagsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTagsOutlined: TagsOutlinedIconType = (props, context) => <Icon name='TagsOutlined' {...{ ...props, ...context.attrs }} icon={TagsOutlinedSvg} />;

IconTagsOutlined.displayName = 'IconTagsOutlined';
IconTagsOutlined.theme = 'outlined';
IconTagsOutlined.originName = 'tags';

export default IconTagsOutlined;
