// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TagsFilledSvg from 'gupo-icons-base/es/asn/TagsFilled';

export interface TagsFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTagsFilled: TagsFilledIconType = (props, context) => <Icon name='TagsFilled' {...{ ...props, ...context.attrs }} icon={TagsFilledSvg} />;

IconTagsFilled.displayName = 'IconTagsFilled';
IconTagsFilled.theme = 'filled';
IconTagsFilled.originName = 'tags';

export default IconTagsFilled;
