// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TagsOutlinedSvg from 'icon-base/es/asn/TagsOutlined';

export interface TagsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTagsOutlined: TagsOutlinedIconType = (props, context) => <Icon name='TagsOutlined' {...{ ...props, ...context.attrs }} icon={TagsOutlinedSvg} />;

IconTagsOutlined.displayName = 'IconTagsOutlined';

export default IconTagsOutlined;
