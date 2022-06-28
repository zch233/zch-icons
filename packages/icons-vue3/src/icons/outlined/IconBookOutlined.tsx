// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BookOutlinedSvg from 'gupo-icons-base/es/asn/BookOutlined';

export interface BookOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBookOutlined: BookOutlinedIconType = (props, context) => <Icon name='BookOutlined' {...{ ...props, ...context.attrs }} icon={BookOutlinedSvg} />;

IconBookOutlined.displayName = 'IconBookOutlined';
IconBookOutlined.theme = 'outlined';
IconBookOutlined.originName = 'book';

export default IconBookOutlined;
