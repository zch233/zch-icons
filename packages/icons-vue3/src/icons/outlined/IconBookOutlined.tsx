// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BookOutlinedSvg from 'icon-base/es/asn/BookOutlined';

export interface BookOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBookOutlined: BookOutlinedIconType = (props, context) => <Icon name='BookOutlined' {...{ ...props, ...context.attrs }} icon={BookOutlinedSvg} />;

IconBookOutlined.displayName = 'IconBookOutlined';

export default IconBookOutlined;
