// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TagsFilledSvg from 'icon-base/es/asn/TagsFilled';

export interface TagsFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTagsFilled: TagsFilledIconType = (props, context) => <Icon name='TagsFilled' {...{ ...props, ...context.attrs }} icon={TagsFilledSvg} />;

IconTagsFilled.displayName = 'IconTagsFilled';

export default IconTagsFilled;
